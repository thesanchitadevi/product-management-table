type ApiResponse = {
  data?: unknown[]
}

export async function getObjects() {
  try {
    // Fetch data using rest api
    const res = await fetch("https://api.restful-api.dev/objects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const response = (await res.json()) as ApiResponse

    return response.data || response || []
  } catch (error) {
    console.error("Error in GET handler:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
