var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Tashkent'>Tashkent</Link>
        </li>
        <li>
          <Link to='/?location=Zaamin'>Zaamin</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
