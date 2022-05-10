interface Unit {
  id: string;
}

interface Box {
  id: string;
}

interface Boxes {
  id: string;
  data: { listBoxes: { items: [{ id: string; updatedAt: string }] } };
  box: [Box];
}

export default Boxes;

export { Box, Unit, Boxes };
