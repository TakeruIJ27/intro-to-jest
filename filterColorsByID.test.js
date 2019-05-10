import filterColorsByID from "./filterColorsByID";

const colors = [
  {
    id: 1,
    name: "Fuscha"
  },
  {
    id: 2,
    name: "Indigo"
  },
  {
    id: 3,
    name: "Yellow"
  }
];

it("should be an array of colors", () => {
  const id = 3;
  const resultArr = filterColorsByID(colors, id);

  expect(resultArr).toHaveLength(2);
});

it(`kapag tumugma ang id sa id ng
bawat item sa loob ng colors array 
dapat siyang matanggal
`, () => {
  const id = 3;
  const resultArr = filterColorsByID(colors, id);

  //expected na result
  const expected = [
    {
      id: 1,
      name: "Fuscha"
    },
    {
      id: 2,
      name: "Indigo"
    }
  ];

  expect(resultArr).toEqual(expected);
});
it("will return an empty array if id is not passed", () => {
  const resultArr = filterColorsByID(colors);

  expect(resultArr).toEqual([]);
});
