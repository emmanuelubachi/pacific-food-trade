import { NextResponse } from 'next/server'

 const pacificCountry = require('@/data/pacific_country.json')


export async function GET(request){
  
  const iso = request.nextUrl.searchParams.get('iso') 

  const countryData = await pacificCountry

  const country = countryData.filter(c => c.iso3 === iso)
  
  return NextResponse.json({country})

}