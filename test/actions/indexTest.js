import { expect } from '../testHelper';
import { ADD_COMMENT } from '../../src/actions/types';
import { addComment } from '../../src/actions';

describe('actions', () => {
  describe('addComment', () => {
    it('has the correct type', () => {
      const action = addComment();
      expect(action.type).to.equal(ADD_COMMENT);
    });

    it('has the correct payload', () => {
      const action = addComment('Comment');
      expect(action.payload).to.equal('Comment');
    });
  });
});
