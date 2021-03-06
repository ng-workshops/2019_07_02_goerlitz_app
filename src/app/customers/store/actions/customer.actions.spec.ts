import * as fromCustomers from './customer.actions';

const customerMockData = require('../../../../../server/mocks/customers/customers.json');

describe('Customer actions', () => {
  describe('LoadCustomers Actions', () => {
    describe('LoadCustomers', () => {
      it('should create a anction', () => {
        const actual = fromCustomers.loadCustomers;
        const expected = {
          type: '[UI] Load Customers'
        };

        expect(actual.type).toEqual(expected.type);
      });
    });

    describe('LoadCustomersSuccess', () => {
      it('should create a anction', () => {
        const payload = customerMockData;
        const actual = fromCustomers.loadCustomersSuccess({
          customers: payload
        });
        const expected = {
          type: fromCustomers.loadCustomersSuccess.type,
          customers: payload
        };

        expect({ ...actual }).toEqual({ ...expected });
      });
    });

    describe('LoadCustomersFail', () => {
      it('should create a anction', () => {
        const payload = { message: 'Load Error' };
        const actual = fromCustomers.loadCustomersFail({ err: payload });
        const expected = {
          type: fromCustomers.loadCustomersFail.type,
          err: payload
        };

        expect({ ...actual }).toEqual({ ...expected });
      });
    });
  });
});
