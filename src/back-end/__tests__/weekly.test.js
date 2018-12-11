const date = require('../date');
const db = require('../db');
const weekly = require('../weekly');

jest.mock('../date', () => ({
  isTodaySunday: jest.fn(() => false),
  isTodayFriday: jest.fn(() => false),
  getCookingDateOnWeek: jest.fn(),
  getDay: jest.fn(() => 'Testday, Testember 32ts')
}));

jest.mock('../db', () => ({
  readCurrIndex: jest.fn(() => 99),
  readUsers: jest.fn(() => [
    { name: 'Test', last: 'Person', email: 'test@example.com' }
  ])
}));

describe('Weekly module', () => {
  describe('sendMail function', () => {
    it("doesn't send mail on any day but Sunday or Friday", () => {
      global.console.warn = jest.fn();

      weekly.sendMail();

      expect(global.console.warn).toHaveBeenCalledWith(
        'Not sending emails, as it is not Friday or Sunday; it is Testday, Testember 32ts'
      );
      expect(db.readCurrIndex).not.toHaveBeenCalled();
    });

    it('sends mail on Sunday', () => {
      date.isTodaySunday.mockImplementation(() => true);
      global.console.warn = jest.fn();

      weekly.sendMail();

      expect(global.console.warn).not.toHaveBeenCalled();
      expect(db.readCurrIndex).toHaveBeenCalled();
    });

    it('sends mail on Friday', () => {
      date.isTodayFriday.mockImplementation(() => true);
      global.console.warn = jest.fn();

      weekly.sendMail();

      expect(global.console.warn).not.toHaveBeenCalled();
      expect(db.readCurrIndex).toHaveBeenCalled();
    });
  });
});
