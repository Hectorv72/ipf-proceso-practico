import { connect } from 'react-redux'
import actions from './actions'

export default (component) => connect(state => state, actions)(component)