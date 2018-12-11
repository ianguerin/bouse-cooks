const mail = require('../mail');

describe('Mail module', () => {
  describe('createMail function', () => {
    it('creates a string with hyperlinked suggestions', () => {
      const cooks = [
        { name: 'Boba' },
        { name: 'Uncle Chicken' },
        { name: 'Cha-cha' }
      ];

      const suggestions = [
        { title: 'Example 1', href: 'http://1.example.com' },
        { title: 'Example 2', href: 'http://2.example.com' }
      ];

      const content = mail.createMail({ cooks, suggestions, actualWeek: 1 });

      expect(content).toMatchSnapshot();
    });

    it('creates a string without any suggestions', () => {
      const cooks = [
        { name: 'Boba' },
        { name: 'Uncle Chicken' },
        { name: 'Cha-cha' }
      ];
      const suggestions = [];

      const content = mail.createMail({ cooks, suggestions, actualWeek: 1 });

      expect(content).toMatchSnapshot();
    });
  });
});
