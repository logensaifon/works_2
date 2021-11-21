import styled from "styled-components";

export const StyleComponent = styled.div`
		background-color: rgb(245, 245, 245);
		

		.ant-menu {
			@media(max-width: 575px) {
					text-align: center;
			}
		}

		.ant-menu-horizontal {
				line-height: 30px;
				border-bottom: none !important;
				background-color: rgb(245, 245, 245);
		}

		.ant-menu-item {
				border-bottom: none !important;
				margin-left: 10px !important;
				margin-right: 10px !important;
		}

`;

export const ReturnComponentStyle = styled.div`
		min-height: 400px;

		.ant-row {
			margin-bottom: 0 !important;
			margin-top: 0 !important;
		}


		.ant-menu-item {
	
		}
`;