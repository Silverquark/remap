import { connect } from 'react-redux';
import { RootState } from '../../../store/state';
import CatalogKeyboard from './CatalogKeyboard';
import { IMetaData, MetaActions } from '../../../actions/meta.action';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => {
  return {
    phase: state.catalog.app.phase,
    definitionDocument: state.entities.keyboardDefinitionDocument,
  };
};
export type CatalogKeyboardStateType = ReturnType<typeof mapStateToProps>;

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (_dispatch: any) => {
  return {
    updateMeta: (data: IMetaData) => {
      _dispatch(MetaActions.update(data));
    },
    initializeMeta: () => {
      _dispatch(MetaActions.initialize());
    },
  };
};
export type CatalogKeyboardActionsType = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(CatalogKeyboard);
