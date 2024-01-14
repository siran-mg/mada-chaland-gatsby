import React from "react"
import { Link } from "gatsby"
import Media from "./media"

export default function OfferItem({ offer, index }) {
  return (
    <div className="grid grid-cols-2 gap-8 items-center" key={offer.title}>
      <div className={`${index % 2 !== 0 && "order-last"}`}>
        <Media
          medias={offer.medias
            ?.filter((_, index) => index === 0)
            .map(media => media.file.url)}
        />
      </div>

      <div>
        <div className="text-2xl text-primary font-bold tracking-wider">
          {offer.title}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: offer.shortDescription?.shortDescription,
          }}
        ></div>
        <Link href={`/offer/${offer.id}`} className="text-primary">
          <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
            En savoir plus
            <img
              src="./assets/icons/arrow-right.svg"
              alt=""
              className="w-4 h-4 ml-4 scale-125"
            />
          </button>
        </Link>
      </div>
    </div>
  )
}
