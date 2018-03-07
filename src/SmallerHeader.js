import React from 'react';
import Title from './Title';
import OrderStore from './stores/OrderStore';
import dispatcher from './dispatcher';
import mql from './mediaQueries';

class SmallerHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuck: false,
      open: OrderStore.getOpen()
    }

    this.onScroll = this.onScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll)

    OrderStore.on("change", () => {
      this.setState(Object.assign(this.state, {
        open: OrderStore.getOpen()
      }))
    })
  }

  getScrollTop() {
    return (window.scrollTop || document.body.scrollTop || document.documentElement.scrollTop)
  }

  onScroll(event) {
    const stuck = (this.getScrollTop() > 250 && mql.nonMobile.matches)

    this.setState(Object.assign(this.state, {
      stuck
    }))
  }

  handleClick() {
    if (this.state.open) {
      dispatcher.dispatch({ type: 'CLOSE', data: false })
    } else {
      dispatcher.dispatch({ type: 'OPEN', data: true })
    }
  }

  render() {
    const stuckClassname = this.state.stuck ? 'scrolling-header' : ''
    const openBasketclass = this.state.open ? 'basket-open' : ''

    return <header className={['header', 'smaller', stuckClassname].join(' ')}>
      <Title level="2" value={this.props.title} />
      <button type="button" className={['basket-button', openBasketclass].join(' ')} onClick={this.handleClick}>
        Basket
      </button>
    </header>
  }
}

export default SmallerHeader;
