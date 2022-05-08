import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../assets/favicon.ico'

const SEO = ({ title, description, image, pathname, article, lang }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: article ? image : `${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        }

        return (
          <>
            <Helmet
              title={seo.title}
              titleTemplate={titleTemplate}
              htmlAttributes={{ lang }}
            >
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && (
                <meta name="twitter:description" content={seo.description} />
              )}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
              <link rel="icon" href={favicon} />
            </Helmet>
          </>
        )
      }}
    />
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: 'Vistas Explodidas - Irbal',
  description: 'Compre as peças que precisa para a sua betoneira Irbal.',
  image: null,
  pathname: null,
  article: false,
  lang: 'en',
}
