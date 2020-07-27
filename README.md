## Mock Server
End points:
1. All users: http://localhost:3000/users
2. All habits: http://localhost:3000/habits
3. User habits: http://localhost:3000/users/{userId}/habits
4. Habits trackers: http://localhost:3000/habits/{habitId}/trackers



### How to create a multi-dimensional table: a note to myself
- Add `<tr></tr>` for each row you want
- Let's say you have four categories horizontally and four categories vertically:
  - So for the horizontal categories you'll need one row
  - For the vertical categories you'll need another four
  - That gives you total five `tr`s.
  - Now because these categories are headers, use `<th></th>` instead of `<td></td>` because td stands for table data
  - Group all your headers in `<thead></thead>` ??
  <table>
    <tr>
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
    </tr>
    <tr>
      <th>row 1</th>
      <td>data 1</td>
      <td>data 2</td>
      <td>data 3</td>
      <td>data ?</td>
    <tr>
    <tr>
      <th>row 2</th>
      <td>data 5</td>
      <td>data 6</td>
      <td>data 7</td>
    </tr>
    <tr>
      <th>row 3</th>
      <td>data 8</td>
      <td>data 9</td>
      <td>data 10</td>
    </tr>
  </table>
