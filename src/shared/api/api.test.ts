import { fetchCharacterByID } from "./api";
describe("API Functions", () => {
  it("fetchCharacterByID retrieves character data by ID", async () => {
    const id = "1";
    const result = await fetchCharacterByID(id);

    expect(result).toHaveProperty("id", 1);
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("species");
  });

  it("fetchCharacterByID returns status code on error", async () => {
    const id = "999999";
    const result = await fetchCharacterByID(id);

    expect(typeof result).toBe("number");
    expect(result).toBe(404);
  });
});
