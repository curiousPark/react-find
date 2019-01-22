import React, { Component } from 'react';
import { BigTitle, MidTitle, ConciergeTextCard, Button } from 'components';
import styled from 'styled-components';
import Util from "../../lib/Util";
import Media from 'react-media';
import _ from 'lodash';


const ContentBox = styled.div`
  width: 1072px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 170px;

`;

const MoblileContentBox = styled.div`
    margin-top: 0px;
    display:flex;
    flex-direction:row;
    justify-content : center;
`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;

const Page = styled.div`
   display:flex;
   flex-direction:column;
   justify-content : center;
   align-item:center;
   height:${p => `
     ${p.height}px;
  `}
`;

const UnusefulCard = styled.div`
    width: 156px;
    height: 83px;
    margin-left: 29px;
    @media only screen and (max-width: 320px) {
      margin-left: 11px;
    }
`;

class Spaces2 extends Component {
    state = {
        active : 'off',
        cards : [],
        windowHeight : window.innerHeight
      }


      componentDidMount(){
         if(!this.props.location.state) return false;
         
         let cardIds = this.props.location.state.formData.cardIds;
         let parentId = cardIds.category
         let cards = Util.spaces2.filter(card => card.parentId === parentId)
         this.setState({
           cards,
           spaces : this.props.location.state.formData.spaces,
           cardIds : cardIds,
           active : 'on',
           cards: cards.map(
            c => {
              if (c.id === this.props.location.state.formData.cardIds.space) {
                c.selected = true;
              } else {
                c.selected = false;
              }
              return c;
            }),
          })
          if(!this.props.location.state.formData.spaces.space){
            this.setState({
              active : 'off'
            })
          }
      }
     

      handleActiveChange = (card, e) => {
        e.preventDefault();
        const cards  = this.state.cards;
  
        this.setState({
            active : 'on',
            cards: cards.map( 
                c => {
                  if(c.id === card.id){
                    c.selected = true;
                  }else{
                    c.selected = false;
                  }
                  return c;
              }),
    
              spaces: {
                ...this.state.spaces,
                space: card.value,
              },
              cardIds : {
                ...this.state.cardIds,
                space: card.id,
              }
        });
      }

    render() {
        
        return (
          <Media query="(max-width: 1146px)">
            {
              m => m ? (
              <>
                    <BigTitle text="공간유형 선택" />
                    <MidTitle text="상업공간" />
                 {
                  _.chunk(this.state.cards,2).map(
                     card2 => (
                         <MoblileContentBox>
                          {
                            card2.map((card, index)=>
                              <ConciergeTextCard 
                                key={index} 
                                id={card.id}
                                title={card.title}
                                subTitle={card.subTitle}
                                selected={card.selected}
                                onClick={ e => this.handleActiveChange(card, e)}
                              />
                          )
                          }
                         </MoblileContentBox>
                     )
                      
                  )
                 }
              </>
              ):(
              <Page height={this.state.windowHeight}>
                  <div>
                    <BigTitle text="공간유형 선택" />
                    <MidTitle text="상업공간" />
          
                    <ContentBox>
                    { 
                      this.state.cards.map((card, index)=>
                        <ConciergeTextCard 
                          key={index} 
                          id={card.id}
                          title={card.title}
                          subTitle={card.subTitle}
                          selected={card.selected}
                          onClick={ e => this.handleActiveChange(card, e)}
                        />
                      )
                    } 
                    </ContentBox>
                    <BttonBox>
                        <Button onClick={_ => {
                            let {history,location} = this.props
                          
                            history.push({
                              pathname:'/concierge/spaces1',
                              state: {
                                formData : { 
                                    ...location.state.formData,
                                    spaces : this.state.spaces,
                                    cardIds : this.state.cardIds,
                                }
                              }
                            })
                          }     
                        }>이전으로</Button>
                        <Button active={this.state.active}
                          style={{position:'absolute'}}
                          onClick={_ => {
                            if(this.state.active === 'on'){
                              let {history, location} = this.props
              
                              history.push({
                                pathname:'/concierge/spaces3',
                                state: {
                                  formData : {
                                    ...location.state.formData,
                                    spaces : this.state.spaces,
                                    cardIds : this.state.cardIds,
                                  }
                                }
                              })
                            }
                      
                          }     
                        }
                        >다음으로 </Button>
                      
                    </BttonBox>
                </div>

              </Page>
              )
            }
          </Media>

        );
      }
    }



export default Spaces2;
