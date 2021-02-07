import React from 'react';

const Info = (props) => {
    let {
        name,
        summary,
        symbol,
        category,
        number,
        source,
        appearance,
        atomic_mass,
        molar_heat,
        density,
        melt,
        boil
      } = props;
    return (
        <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div
                  onClick={this.closeInfo}
                  className="close-button"
                  title="Close Info">
                  Close [&times;]
                </div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance ? (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat ? <span> | Molar Heat: {molar_heat}</span> : ''}
                    {melt ? <span> | Melt: {melt}K</span> : ''}
                    {boil ? <span> | Boil: {boil}K</span> : ''}
                  </div>
                  <div>
                    {summary} ...{' '}
                    <a target="_blank" href={source}>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
      );
}
 
export default Info;props