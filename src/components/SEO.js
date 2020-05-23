import React from "react"
import PropTypes from "prop-types"
import {useLocation} from "@reach/router"
import Meta from "./Meta"
import Twitter from "./Twitter"
import Facebook from "./Facebook"
import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = ({title = "", description = "", image = ""}) => {
    console.log("INSIDE SEO COMPONENT")

    const {pathname} = useLocation()
    console.log(pathname)

    const meta = useSiteMetadata()
    console.log("meta", meta)

    const defaultTitle = meta.title
    const defaultTwitterImage = `${meta.url}/twitter.png`
    const defaultFacebookImage = `${meta.url}/facebook.png`

    const seoImage = `${meta.url}${image}`
    const seoUrl = `${meta.url}${pathname}`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description}
                keywords={meta.keywords}
                icon={`${meta.url}/favicon.png`}
            />

            <Facebook
                url={seoUrl}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultFacebookImage}
            />

            <Twitter
                site={meta.twitter}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultTwitterImage}
            />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
