import { connect } from 'react-redux'
import actions from '../redux/actions'

export default (component) => connect(state => state, actions)(component)