import styled from 'styled-components'
import { device } from '../devices';


export const Container = styled.div`
  max-width:100%;
  position:relative;
  @media (${device.laptop}) {
    margin:0 auto;
    max-width:1050px;
  }
  @media (${device.laptopL}) {
    margin:0 auto;
    max-width:1250px;
  }
  @media (${device.desktop}) {
    margin:0 auto;
    max-width:2300px;
  }


`