import { NextResponse } from 'next/server'

 const pacificCountry = require('@/data/pacific_country.json')

// export default async function POST(req, res) {

//   const { code } = req.query

//   const country = countryData.find(c => c.code === code)

//   if (!country) {
//     return res.status(404).json({ message: 'Country not found' })
//   }

//   res.status(200).json(country)

// }

export async function GET(){
  //const iso = request.nextUrl.searchParams.get()  

  const country = await pacificCountry

  //const country = countryData.find(c => c.iso3 === iso)
  
  return NextResponse.json({country})

}