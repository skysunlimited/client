import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const PixelWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  '-webkit-box-shadow': '0 0px 0px rgba(0,0,0,0)'
`;


class Pixel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      hover : false,
    }

    this.toggleHover = this.toggleHover.bind(this);
    this.receiveSelection = this.receiveSelection.bind(this);
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  receiveSelection(){
    this.props.onClickSelect(this.props.index)
  }
  

  render() {

    return (
        <PixelWrapper style={{
          
          'position': 'absolute', 
          'left': 60 * this.props.pixelData.x, 
          'top': 60 * this.props.pixelData.y,
          '-webkit-box-shadow': (this.state.hover || this.props.selected) ? '0 5px 25px rgba(0,0,0,0.5)' : '0 0px 0px rgba(0,0,0,0)'}}
          
          onMouseEnter={this.toggleHover} 
          onMouseLeave={this.toggleHover}
          >
              {/*TODO REFACTOR THIS WITH A MAP and make sure drawing si disabled*/}
              <Square pixelId={this.props.pixelData.id} color={this.getColor(0)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(1)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(2)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(3)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(4)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(5)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(6)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(7)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>
              <Square pixelId={this.props.pixelData.id} color={this.getColor(8)} onSelectionChange={this.receiveSelection} drawingAllowed = {true}/>

        </PixelWrapper>
    )
  }

  getColor(index){
    if (this.props.owned){
      if ((index % 2) == 0) 
        return '#aac0d6';
      else
        return '##d1dde9';
    }
    else if (!this.props.pixelData.colors){
      if ((index % 2) == 0)
        return '#dfdfdf';
      else
        return '#f9f9f9';
    }
    else{
      return this.props.pixelData.colors[index];
    }
  }
}

export default Pixel