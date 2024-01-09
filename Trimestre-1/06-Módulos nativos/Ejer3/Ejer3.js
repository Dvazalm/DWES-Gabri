function decomposeUrl(url) {
  function isValidIP(ip) {
      const octets = ip.split('.');
      if (octets.length !== 4) return false;
      return octets.every(octet => {
          const num = parseInt(octet, 10);
          return !isNaN(num) && num >= 0 && num <= 255;
      });
  }

  const result = {
      protocol: null,
      ipAdress: null,
      subDomain: null,
      domainName: null,
      folderTree: null,
      targetFile: null,
      argumentsFile: null
  };

  // Manejar protocolo no estándar
  const protocolMatch = url.match(/^([a-zA-Z]+):\/\//i);
  if (protocolMatch) {
      result.protocol = protocolMatch[1];
      url = url.slice(protocolMatch[0].length);  // Eliminar protocolo de la URL
  } else if (url.startsWith('file://')) {
      result.protocol = 'file';
      url = url.slice(7);
  }

  // Dividir la URL en partes
  const [hostnamePath, search] = url.split('?');
  const [hostname, ...pathParts] = hostnamePath.split('/');

  // verificar si el nombre de host parece una dirección IP
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (ipRegex.test(hostname)) {
      if (isValidIP(hostname)) {
          result.ipAdress = hostname;
      } else {
          // Si no es una IP válida, la consideraremos como un nombre de dominio
          result.domainName = hostname;
      }
  } else {
      // Si no es una IP, hacer dominio y subdominio
      const hostnameParts = hostname.split('.');
      if (hostnameParts.length > 2) {
          result.subDomain = hostnameParts[0];
          hostnameParts.shift();  // Eliminar subdominio del array
      }
      result.domainName = hostnameParts.join('.');
  }

  // ruta
  if (pathParts.length > 1) {
      result.targetFile = pathParts.pop();
      result.folderTree = pathParts;
  } else if (pathParts.length === 1 && pathParts[0]) {
      result.targetFile = pathParts[0];
  }

  // si es un array vacio pone null
  if (result.targetFile === '') {
      result.targetFile = null;
  }

  // hacer busqueda
  if (search) {
      result.argumentsFile = `?${search}`;
  }

  return result;
}
