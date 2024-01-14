import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import OfferItem from "../components/offer"

export const query = graphql`
  query {
    allContentfulOffer {
      nodes {
        id
        title
        price
        medias {
          file {
            url
          }
        }
        description {
          description
        }
        shortDescription {
          shortDescription
        }
      }
    }
    contentfulHeadline {
      text {
        text
      }
      medias {
        file {
          url
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const offers = data.allContentfulOffer.nodes
  const headline = data.contentfulHeadline

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${headline.medias?.shift()?.file?.url})`,
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div
          className="flex justify-center items-center text-white font-semibold tracking-wide text-4xl m-auto h-full"
          dangerouslySetInnerHTML={{ __html: headline.text.text }}
        ></div>
      </div>

      <div className="relative rounded-t-3xl -top-5 bottom-0 w-full bg-surface h-full px-56 py-8">
        <div className="text-center text-4xl mb-16 mt-8">Nos offres</div>

        <div className="flex flex-col gap-16">
          {offers?.map((offer, index) => (
            <OfferItem offer={offer} index={index} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
