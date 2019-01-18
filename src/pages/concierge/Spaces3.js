import React, { Component } from 'react';
import { StyledHeader, ConciergeTextCard, Button } from 'components';

import styled from 'styled-components';
import Util from "../../lib/Util";

const ContentBox = styled.div`
  width: 1072px;
  min-height: 330px;
  height: auto;
  margin: 0 auto;
  margin-top: 170px;

`;

const BttonBox = styled.div`
  width: 456px;
  height: 60px;
  margin: 0 auto;
  margin-top: 130px;
`;

class Spaces3 extends Component {
    state = {
        active : 'off',
        card : [
                {id: 0, title: "상업공간", subTitle: "Retail", selected:false},
                {id: 1, title: "주거공간", subTitle: "Residence", selected:false},
                {id: 2, title: "사무공간", subTitle: "Office", selected:false},
                {id: 3, title: "부분시공", subTitle: "Remdeling", selected:false},
               ]
     }

    handleActiveChange = (id, e) => {
        e.preventDefault();
        const card  = this.state.card;
        this.setState({
            active : 'on',
            card: card.map(
                c => {
                  if(c.id === id){
                    c.selected = true;
                  }else{
                    c.selected = false;
                  }
                  return c;
              })

        });
    }

  
    render() {
       
        return (
            <div>
                <StyledHeader title="공간유형 선택" msg="상업공간" />
                <ContentBox>
                    <ConciergeTextCard id={this.state.card[0].id} title={this.state.card[0].title} subTitle={this.state.card[0].subTitle} selected={this.state.card[0].selected} onClick={(e) => this.handleActiveChange(this.state.card[0].id, e)} />
                    <ConciergeTextCard id={this.state.card[1].id} title={this.state.card[1].title} subTitle={this.state.card[1].subTitle} selected={this.state.card[1].selected} onClick={(e) => this.handleActiveChange(this.state.card[1].id, e)} />
                    <ConciergeTextCard id={this.state.card[2].id} title={this.state.card[2].title} subTitle={this.state.card[2].subTitle} selected={this.state.card[2].selected} onClick={(e) => this.handleActiveChange(this.state.card[2].id, e)} />
                    <ConciergeTextCard id={this.state.card[3].id} title={this.state.card[3].title} subTitle={this.state.card[3].subTitle} selected={this.state.card[3].selected} onClick={(e) => this.handleActiveChange(this.state.card[3].id, e)} />
                
                </ContentBox>
                <BttonBox>
                    <Button     onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/spaces2')
                      }     
                    }>이전으로</Button>
                   
                    <Button active={this.state.active}
                      style={{position:'absolute'}}
                      onClick={_ => {
                        let {history} = this.props
                        history.push('/concierge/measure')
                      }     
                    }
                    >다음으로 </Button>
                   
        
                </BttonBox>
            </div>
           
        );
      }
    }



export default Spaces3;
