import React from "react"
import Media from "./media"

export default function PartnerItem({ partner }) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Media medias={partner?.medias.map(media => media.file.url)} />
      <div
        dangerouslySetInnerHTML={{ __html: partner?.description?.description }}
      ></div>
    </div>
  )
}
