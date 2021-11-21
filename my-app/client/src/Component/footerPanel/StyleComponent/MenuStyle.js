import styled from "styled-components";

export const MenuStyle = styled.div`
	.ant-menu {
		line-height: 25px;
	}

	.BasketItem {
		float: right;
	}	

	@media(max-width: 1200px) {
	.ant-menu-item {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	}

	@media (max-width: 992px) {
	.ant-menu-item {
      min-width: 130px;
    }
	}


	@media(max-width: 768px) {
    .ant-menu-item {
		min-width: auto;
      width: 20%;
    }
	.BasketItem {
		width: 40%;
	}
  }

  @media(max-width: 576px) {

    .ant-menu-item {
      width: 25%;
    }
	.BasketItem {
		width: 25%;
	}
  }
  
`;