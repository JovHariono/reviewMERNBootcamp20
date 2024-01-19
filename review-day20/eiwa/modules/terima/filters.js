function TerimaFilter(req) {
  let qSearch = {};
  const { search, limit, page, ...filters } = req.query;

  if (search) {
    qSearch = {
      $or: [
        /**
         * You can change field1 and field2 according to your needs.
         **/

        { nomor: { $regex: ".*" + search + ".*", $options: "i" } },
        { "pelanggan.nama": { $regex: ".*" + search + ".*", $options: "i" } },
        {
          "pelanggan.telepon": { $regex: ".*" + search + ".*", $options: "i" },
        },
      ],
    };
  }

  return { ...filters, ...qSearch };
}

module.exports = {
  TerimaFilter,
};
