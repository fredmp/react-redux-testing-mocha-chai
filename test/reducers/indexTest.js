import { expect } from '../testHelper';
import { comments as commentsReducer } from '../../src/reducers';
import { ADD_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentsReducer(undefined, {})).to.be.instanceOf(Array);
    expect(commentsReducer(undefined, {})).to.be.eql([]);
  });

  it('handles action with type ADD_COMMENT', () => {
    const action = { type: ADD_COMMENT, payload: 'Comment' };
    expect(commentsReducer([], action)).to.eql(['Comment']);
  });
});
