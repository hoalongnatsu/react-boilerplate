import './index.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Interface */
import { RootState, MenuState } from 'interface';

/* Actions */
import { get_all_menu } from 'actions/menu';

interface ComponentProps {
  
}

interface StateToProps {
  menu: MenuState[]
}

interface DispatchProps {
  get_all_menu: () => void
}

type Props = ComponentProps & StateToProps & DispatchProps;

interface State {
  
}

class Topbar extends Component<Props, State> {
  state = {}

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.menu.length === 0) {
      props.get_all_menu();
    }

    return null;
  }

  render() {
    const { menu } = this.props;

    return (
      <div>
        {menu.map((m) => <p key={m.name}>{m.name}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({menu: state.menu})

export default connect(mapStateToProps, { get_all_menu })(Topbar);
