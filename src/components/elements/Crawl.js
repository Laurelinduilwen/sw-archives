import { StyledCrawl } from '../styles/StyledCrawl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: '100%',
    height: '530px',
    background: '#000',
    overflow: 'hidden',
  },
  fade: {
    position: 'relative',
    width: '100%',
    minHeight: '30vh',
    top: '-25px',
    backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
    zIndex: 1,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '800px',
    color: '#feda4a',
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize: '500%',
    fontWeight: '600',
    letterSpacing: '6px',
    lineHeight: '150%',
    perspective: '400px',
    textAlign: 'justify',
  },
  crawl: {
    position: 'relative',
    top: '9999px',
    transformOrigin: '50% 100%',
    animation: 'crawl 60s linear',
  },
  title: {
    fontSize: '90%',
    textAlign: 'center',
  },
  subTitle: {
    margin: '0 0 100px',
    textTransform: 'uppercase',
  },
};

class Crawl extends Component {
  mergeStyles(defaultStyle, userStyle) {
    if (!userStyle) {
      return defaultStyle;
    }

    return Object.assign(defaultStyle, userStyle);
  }

  render() {
    const {
      children,
      containerStyles,
      fadeStyles,
      textContainerStyles,
      crawlStyles,
      titleStyles,
      subTitleStyles,
      textStyles,
      title,
      subTitle,
      text,
    } = this.props;

    return (
      <StyledCrawl>
        <div className="crawler" style={this.mergeStyles(styles.container, containerStyles)}>
          <div style={this.mergeStyles(styles.fade, fadeStyles)}></div>
          <section style={this.mergeStyles(styles.textContainer, textContainerStyles)}>
            <div style={this.mergeStyles(styles.crawl, crawlStyles)}>
              <div style={this.mergeStyles(styles.title, titleStyles)}>
                <p className="title">{title}</p>
                <h1 className="subTitle" style={this.mergeStyles(styles.subTitle, subTitleStyles)}>
                  {subTitle}
                </h1>
              </div>
              <p className="text" style={textStyles}>
                {text}
              </p>
              {children}
            </div>
          </section>
        </div>
      </StyledCrawl>
    );
  }
}

Crawl.propTypes = {
  /**
   * Any nodes in addition to provided text
   */
  children: PropTypes.node,
  /**
   * Override the inline-styles of the various elements.
   */
  containerStyles: PropTypes.object,
  textContainerStyles: PropTypes.object,
  crawlStyles: PropTypes.object,
  titleStyles: PropTypes.object,
  subTitleStyles: PropTypes.object,
  textStyles: PropTypes.object,
  /*
   * Texts
   */
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Crawl;
