import { useEffect, useState } from "react"
const PAGE_SIZE = 20;
export const useSalesHook  = () => {
  const [sales, setSales] = useState([]);
  const [saleCount, setSaleCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const getNextSales = async() => {
    if((sales.length > saleCount && page !== 0) || loading){
      return;
    }
    setLoading(true);
    const limit = PAGE_SIZE;
    const skip = page * PAGE_SIZE;
    const salesRespnse = await fetch(`http://192.168.1.101:3000/sales?limit=${limit}&skip=${skip}`)
    const salesDataOnScreen = await salesRespnse.json();
    if(page===0){
      setSales(salesDataOnScreen);
    }else {
      setSales(setCuurentSales => [...setCuurentSales, ...salesDataOnScreen]);
    }
    setPage(page + 1)
    setLoading(false);
  }
  // fetch sales data 
  // const fetchSalesData = async() => {
  //   try{
  //     const salesRespnse =  await fetch('http://192.168.1.101:3000/sales?limit=14')
  //     const sales = await salesRespnse.json();
  //     setSales(sales)
  //   }catch(err){console.log("error ---> ", err);}
  // }

  // fetch sales count 
  const fetchSalesCount = async() => {
    try{
      const countResponse = await fetch('http://192.168.1.101:3000/sales/count')
      const count = await countResponse.json();
      setSaleCount(count);
    }catch(err){
      throw err;
    }
  }

  // refresh sales data 
  const refreshSalesData = async () => {
    setPage(0)
    setSaleCount(0)
    await fetchSalesCount()
  }
  useEffect(() => {
    fetchSalesCount()
  }, []);
  useEffect(() => {
    if(saleCount!==0){
      // fetchSalesData();
      getNextSales();
    }
  }, [saleCount])
  return {sales, getNextSales, refreshSalesData, loading}  
}