import { NextResponse } from 'next/server'

 const rawData = require('@/data/food_imports_map.json')

export async function GET(request){
  
  const iso = request.nextUrl.searchParams.get('iso') 

  const data = await rawData

  const res = data.filter((item) => item.ImporterISO === iso);
  
  return NextResponse.json(res)

    //   if (!country) {
    //     return res.status(404).json({ message: 'Country not found' })
    //   }
    //   res.status(200).json(country)

}