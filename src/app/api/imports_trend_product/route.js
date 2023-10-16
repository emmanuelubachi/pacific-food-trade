import { NextResponse } from 'next/server'

 const rawData = require('@/data/imports_trend_by_product.json')


export async function GET(request){
  
    const iso = request.nextUrl.searchParams.get('iso') 

    const data = await rawData
  
    const res = data.filter((item) => item.ImporterISO === iso);
    
    return NextResponse.json(res)

}