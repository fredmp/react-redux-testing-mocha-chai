import { renderComponent, expect } from '../testHelper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a form with class comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('when entering text', () => {
    const text = 'some comment';
    beforeEach(() => {
      component.find('textarea').simulate('change', text);
    });

    it('displays text that is entered', () => {
      expect(component.find('textarea')).to.have.value(text);
    });

    describe('when submiting text', () => {
      it('clears the text area', () => {
        component.find('button').simulate('submit');
        expect(component.find('textarea')).to.have.value('');
      });
    });
  });
});
