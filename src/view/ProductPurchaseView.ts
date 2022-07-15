import { $ } from '../utils';
import View from './View';

class ProductPurchaseView extends View {
  constructor() {
    super($('#main') as HTMLElement);
  }

  markUp() {
    return `
      <section>
        <h2>상품 구매하기</h2>
      </section>
    `;
  }
}

export default ProductPurchaseView;