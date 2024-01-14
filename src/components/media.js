import React from "react"
import ReactSimpleImageViewer from "react-simple-image-viewer"

export default function Media({ medias, displayEach }) {
  const [openMainMedia, setOpenMainMedia] = React.useState(false)
  const mainMedia = medias[0]
  return (
    <>
      {displayEach ? (
        medias.map((media, index) => (
          <img
            key={index}
            src={media}
            alt=""
            className={`rounded-xl shadow-xl shadow-primary w-full object-cover`}
            onClick={() => setOpenMainMedia(true)}
          />
        ))
      ) : (
        <img
          src={mainMedia}
          alt=""
          className={`rounded-xl shadow-xl shadow-primary w-full object-cover`}
          onClick={() => setOpenMainMedia(true)}
        />
      )}

      {openMainMedia && (
        <ReactSimpleImageViewer
          src={medias}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={() => setOpenMainMedia(false)}
        />
      )}
    </>
  )
}
