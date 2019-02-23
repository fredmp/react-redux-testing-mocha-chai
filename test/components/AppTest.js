import { renderComponent, expect } from '../testHelper';
import App from '../../src/components/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('outputs the title', () => {
    expect(component).to.contain('React simple starter');
  });

  it('has a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('has a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
