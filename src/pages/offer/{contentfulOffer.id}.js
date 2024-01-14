import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
import Media from "../../components/media"

export const query = graphql`
  query pageQuery($id: String) {
    contentfulOffer(id: { eq: $id }) {
      description {
        description
      }
      price
      title
      medias {
        file {
          url
        }
      }
    }
  }
`

const OfferPage = ({ data }) => {
  console.log(data)
  const offer = data.contentfulOffer

  return (
    <Layout>
      <div className="px-56 py-16">
        <div className="text-2xl text-primary font-bold tracking-wider mb-8">
          {offer?.title}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 ">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: offer?.description?.description,
              }}
            ></div>
            <div className="flex flex-col mt-8">
              <div className="text-gray-500">A partir de</div>
              <div className="text-primary text-2xl">{offer?.price}€ / pax</div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Media
              medias={offer?.medias
                ?.filter((_, index) => index === 0)
                .map(media => media.file.url)}
            />
            <div className="grid grid-cols-4 gap-8 ">
              <Media
                medias={offer?.medias
                  ?.filter((_, index) => index > 0)
                  .map(media => media.file.url)}
                displayEach
              />
              {/* <PhotoProvider>
              {offer?.medias
                ?.filter((_, index) => index > 0)
                .map((media, index) => (
                  <PhotoView src={media} key={index}>
                    <img
                      src={`https:${media}`}
                      alt=""
                      className="rounded-xl shadow-xl shadow-primary h-36 w-full object-cover"
                    />
                  </PhotoView>
                ))}
            </PhotoProvider> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OfferPage
