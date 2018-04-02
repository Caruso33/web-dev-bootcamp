const minYear = birthData[0].year;
const maxYear = birthData[birthData.length - 1].year;

const width    = 600, height = 600;
let numBars    = 12,
    barPadding = 10,
      barWidth = width / numBars - barPadding;

d3.select('input')
  .property('min', minYear)
  .property('max', maxYear)
  .property('value', minYear);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('rect')
  .data(birthData.filter(d => d.year === minYear))
  .enter()
  .append('rect')
    .attr('width', barWidth)
    .attr('height', d => d.births / 2.5e6 * height)
    .attr('y', d => height - d.births / 2.5e6 * height)
    .attr('x', (d,i) => (barWidth + barPadding) * i)
    .attr('fill', 'purple')

d3.select('input')
  .on('input', () => {
    let year = +d3.event.target.value;
    d3.selectAll('rect')
      .data(birthData.filter(d => d.year === year))
        .attr('height', d => d.births / 2.5e6 * height)
        .attr('y', d => height - d.births / 2.5e6 * height)

  })
