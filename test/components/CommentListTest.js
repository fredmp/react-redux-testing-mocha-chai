import { renderComponent, expect } from '../testHelper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentList, null, { comments: ['A comment', 'Another comment'] });
  });

  it('displays an li element for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('displays each comment that is provided', () => {
    expect(component).to.contain('A comment');
    expect(component).to.contain('Another comment');
  });
});
