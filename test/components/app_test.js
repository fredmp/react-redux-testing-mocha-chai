import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

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
});
