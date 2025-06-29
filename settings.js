require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAO4h2FrwxQ5mmAQAAJkHAAAKAAAAY3JlZHMuanNvbpVVW46jRhTdyqh+8mErxhjwQ2opGNtg08bYGGMTzUcZCigDBQ0Fhp5YygoiRYlGeahXkSj7yBKyg15ChLt7Zj6SSYev4lI699x7zr28AyTBOVJRDUbvQJrhElLUHGmdIjAC48LzUAbawIUUghHwlZQEjE+RyQlVuW8NpKPRnZYbZ7cNJrqUbBWWEHaZpJZzAy5tkBbHCDufATzXdmjxs3w2NUIlvp8eT+st1dSe4BtVGG60yXJ8v9qYY2yGN+DSIEKcYeJP0wDFKIORimod4ux19KWVnYSLdKWLNbVO3IaglEz29mm*qXVcCF1t4ObGsUsXsf86+k7HOmk1w8tib+jkXD+gknCaquVmZ5mHJJeqiTEN0GF7Dp7p59gnyJ27iFBM61f3XZT4yofprdY*ZcWxxbb2SbqKd5UveEYvxPZBxGtncZ64U*N1xDVYb5aqjauubC7E*nChymx5DjJ52lHOW3ffwqeQu3d3x*r8KXE9e*FK+H*6jiVXJql71Pwk6iNRVuT93lszvjQoU9XL+GU1Teyl7q5i5nX0x1V5e7dWiNLv7mtt1wpmR6YlnQa3Ns4Zdz1ZEFkpTDYrJuJH+pAW2edY7si9KdzWC6NbINU7I6laWZKJeiSZeh17Xk+7*HgHp5OZ3uvo5XY+Tj1hwGkbR5Vx0bEUZLTIzBxTXy18uGQTYRwvfPHmWlGI6rkLRt1LG2TIxznNIMUJucYGvTaAbmkgJ0P02l4A65kRlfbONXUap3tWz1Sd9iV7TjS8mue93TYfqOrq2AoON6AN0ixxUJ4jV8E5TbJ6ifIc+igHo6*ftgFBFX0SrknX67aBh7OcmqRIowS6L6q+fISOkxSEGjVxpOaAMjBiPoYRpZj4edPHgsDMCXCJpADSHIw8GOXoQ4UoQy4Y0axAH6ZWStym8Zw6s*lJbw3aIL4Kgl0wAkOuL3ACx3I9dsQzX+VfnhtUmKZfEkRBGxDYXAbzv37*9YvHh5++ffP48MMff*745ps3jw8***b48P67x4f33z8+vP8FtEF0heRZjmeEIccOuwI3aFCb+OVDMU1uF1GIo7zZDnMpSlE4mWr3S2E5l2Xx4IuSL4KPxb+46EmlUBYPfS9SkSVViIcrGW02RLGPDL+OtoNEnXgrvdCEydDgbv4BpCF4Tjpmhf27NWTOrLynnGweW4Gy1iyb6KzemS12iuOFSuxmfO3pzIbv6JPteVtbZon04XB26mN9mKtzGgnEsoYeTsTGcm3gohI76NNk22OQLceCcJgHUUW6i5aWCJ11fNdZ4c5mYlqV4GverBzM000t5Jlo+Gnrrux1Si62GfF4t*TueE4e5m4U9k*aaTi+g2awfvL3db6i572Gr85rZG1ePYyua+JZv*+S+Yl3Y0bm0v4E4nnv*NtCsMe+vOrxBon8fF9Yp4CEpl2x1nBlLsyOKvm9+1P*hPyOWYDL5W0bpBGkXpLFYATy+AhBG2RJ0Vh7Trzkc*8Q0ZxLz1MdwZyKH8dli2OUUxinYNTt80y*N+DZ*tMtPUtSBeYBGIGuygUK13i*FtPUoJC+TB8Qm0c*IHD5G1BLAQIUAxQAAAgIAO4h2FrwxQ5mmAQAAJkHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAMAEAAAAAA==',
  BOT_ADMIN: process.env.BOT_ADMIN || '94764642432',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '00569678Avs',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
