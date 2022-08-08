import d3 from 'd3';

// const el = d3.selectAll('.st0')
export const coloriseMap = () => {
  const defaultColor = '#633633';
  const activeColor = '#601020';

  const data = Array(379)
    .fill('item')
    .map((el, i) => i + 1);

  const min = d3.min(data);
  const max = d3.max(data);
  const color = d3
    .scaleSequential(d3.interpolateCubehelixDefault)
    .domain([min, max]);
  // .range(['#333', '#888', '#ddd'])

  console.log({ min, max, c: color(20) });

  const svg = d3.select('svg');

  const els = svg.selectAll('path');

  els.data(data).exit().remove();
  els
    // .attr('fill', defaultColor )
    .attr('fill', (d) => color(d))
    .attr('style', '');
  // .attr('width', d => console.log(d))

  els
    .on('mouseover', function (el) {
      const thisEl = d3.select(this);
      thisEl.attr('fill', activeColor);
      // console.log(el, thisEl)
    })
    .on('mouseleave', function (el, i, d) {
      const thisEl = d3.select(this);
      // thisEl.attr('fill', defaultColor)
      thisEl.attr('fill', (d) => color(d));
      // .attr('transform', 'scale(1.5)')
      // console.log(el, thisEl)
      // console.log({el, i, d})
    })
    .on('mousedown', function (el, i, d) {
      console.log({ el, i, d });
    });
};
