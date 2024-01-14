import React from "react"
import Layout from "../../components/layout"
import PartnerItem from "../../components/partner"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    hotels: allContentfulHotel(filter: { node_locale: { eq: "fr" } }) {
      nodes {
        description {
          description
        }
        medias {
          file {
            url
          }
        }
      }
    }
    cars: allContentfulCar(filter: { node_locale: { eq: "fr" } }) {
      nodes {
        description {
          description
        }
        medias {
          file {
            url
          }
        }
      }
    }
  }
`

const PartnersPage = ({ data }) => {
  console.log(data)
  const cars = data.cars
  const hotels = data.hotels
  return (
    <Layout>
      <div className="px-56 py-16">
        <div className="text-2xl text-primary font-bold tracking-wider mb-8">
          Nos partenaires
        </div>
        <div className="flex flex-col">
          {cars.nodes.length > 0 && (
            <>
              <div className="text-lg text-primary font-bold tracking-wider mb-8">
                Voitures
              </div>
              <div className=" flex flex-col gap-8">
                {cars.nodes.map((car, index) => (
                  <PartnerItem partner={car} key={index} />
                ))}
              </div>
            </>
          )}
          {hotels.nodes.length > 0 && (
            <>
              <div className="text-lg text-primary font-bold tracking-wider my-8">
                Hôtels
              </div>
              <div className=" flex flex-col gap-8">
                {hotels.nodes.map((hotel, index) => (
                  <PartnerItem partner={hotel} key={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PartnersPage
