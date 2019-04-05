import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import DelButton from "./DelButton"
import "./del-button-style.css"

export default withRouter(withTranslation()(DelButton))
