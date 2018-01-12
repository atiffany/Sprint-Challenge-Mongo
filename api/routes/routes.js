module.exports = app => {
  // Todo: Fill in your routes here

  //budget - POST
  server.post('/budget', (req, res) => {
    const budgetData = req.body;

    const budget = new budget(budgetData);

    budget.save()
      .then(function(newBudget) {
        res.status(201).json(newBudget);
      })
      .catch(function(error) {
        res.status(401).json({ error });
      });
  });

  // category - POST, GET
  server.post('/category', (req, res) => {
    const categoryData = req.body;

    const category = new category(categoryData);

    category.save()
      .then(function(newCategory) {
        res.status(201).json(newCategory);
      })
      .catch(function(error) {
        res.status(401).json({ error });
      });
  });

  server.get('/category', (req, res) => {
    Category.find({})
      .then(function(categories) {
        res.status(200).json(categories);
      })
      .catch(function(error) {
        res.status(401).json({ error });
      });
  });

  // expense - POST, GET
  server.post('/expense', (req, res) => {
    const expenseData = req.body;

    const expense = new Expense;

    expense.save()
      .then(function(newExpense) {
        res.status(201).json(newExpense);
      })
      .catch(function(error) {
        res.status(401).json({ error });
      })
  });

  server.get('/expense', (req, res) => {});
};
