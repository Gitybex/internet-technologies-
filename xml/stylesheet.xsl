<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Note and Students</title>
      </head>
      <body>
        <h1>Note</h1>
        <p>To: <xsl:value-of select="document/note/to"/></p>
        <p>From: <xsl:value-of select="document/note/from"/></p>
        <h2>Heading: <xsl:value-of select="document/note/heading"/></h2>
        <p><xsl:value-of select="document/note/body"/></p>

        <h2>Students</h2>
        <ul>
          <xsl:for-each select="document/students/student">
            <li>
              <xsl:value-of select="enrollment_number"/> - 
              <xsl:value-of select="name"/> (
              <xsl:value-of select="email"/>)
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>