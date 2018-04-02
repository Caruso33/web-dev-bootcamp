const minYear = d3.min(birthData, d => d.year);
const maxYear = d3.max(birthData, d => d.year);

const width    = 600, height = 600;
let numBars    = 12,
    barPadding = 10,
      barWidth = width / numBars - barPadding,
      maxBirths = d3.max(birthData, d => d.births);

const yScale = d3.scaleLinear()
                    .domain([0, maxBirths])
                    .range([height, 0])

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
    .attr('height', d => height - yScale(d.births))
    .attr('y', d => yScale(d.births))
    .attr('x', (d,i) => (barWidth + barPadding) * i)
    .attr('fill', 'purple')

d3.select('input')
  .on('input', () => {
    let year = +d3.event.target.value;
    d3.selectAll('rect')
      .data(birthData.filter(d => d.year === year))
        .attr('height', d => height - yScale(d.births ))
        .attr('y', d => height - yScale(d.births))

  })
