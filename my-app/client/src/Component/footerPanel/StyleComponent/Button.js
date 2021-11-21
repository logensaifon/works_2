import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`
  border: solid 1px #22222211;
  display: flex;
  width: 100%;

  i {
	width: auto;
	height: auto;
    float: left;
    margin-top: 6px;
    margin-left: 8px;
    margin-right: 8px;
  }

  p {
	min-width: 160px ;
	width: auto;
	height: auto;
	margin-top: 10px;
    float: left;

  }
  .sews {
	width: auto;
	height: auto;
	margin-top: 10px;
    float: left;
    margin-left: 8px;
    margin-right: 8px;
  }

	@media(max-width: 576px) {

	.BasketItem{
		float: none;
	}

	i {
	top: 0;
	order: 1;
	font-size: 25px;
    float: none;
	width: auto;
	height: auto;
    margin-top: 0;
    margin-left: 8%;
    left: unset;
	position: relative !important;
  }

  p {
	  display: none;
  }

  .sews {
	order: 2;
	margin-top: 10px;
    float: none;
    margin-right: 8%;
    right: none;
  }
	}


	@media(max-width: 992px) {
	i {
	top: 0;
	order: 1;
	font-size: 25px;
    float: none;
    margin-top: 0  !important;
	width: auto;
	height: auto;
	position: absolute;
	left: 8%;
	}

	.sews {
		order: 1;
		margin-top: 0 !important;
		float: none;
		width: auto;
		height: auto;
		position: absolute;
		right: 8%;
	}

	p {
		min-width: auto;
		order: 3;
		margin-top: 20px !important;
		margin-bottom: 0 !important;
		width: auto;
		height: auto;
		float: none !important;
		margin-left: auto !important;
		margin-right: auto !important;
		clear: both;
		font-size: 8px;
	}

	}
`;

